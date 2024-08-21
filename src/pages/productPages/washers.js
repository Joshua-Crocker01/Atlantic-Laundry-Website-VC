import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

const Washers = () => {
    const [csvData, setCsvData] = useState([]);

    useEffect(() => {
        fetchCSVData();
    }, []);

    const fetchCSVData = async () => {
        const csvUrl = 'https://docs.google.com/spreadsheets/d/1njQL2D4WVBtTdQ7xU6uTiel8PMGztNy9lWv5m69_EOo/pub?gid=0&single=true&output=csv';

        try {
            const response = await fetch(csvUrl);
            const csvText = await response.text();
            // Parse the CSV text into an array of objects
            const parsedData = parseCSV(csvText);
            console.log(parsedData)
            setCsvData(parsedData);
        } catch (error) {
            console.error('Error fetching CSV data:', error);
        }
    };

    const parseCSV = (csvText) => {
        const rows = csvText.split("\n").filter(Boolean);
        const headers = rows[0].split(",").map(header => header.trim());
        const data = rows.slice(1).map(row => {
            const values = parseCSVRow(row);
            return headers.reduce((obj, header, index) => {
                obj[header] = values[index];
                return obj;
            }, {});
        });
        return data;
    };

    const parseCSVRow = (row) => {
        const result = [];
        let inQuotes = false;
        let value = "";

        for (let char of row) {
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                result.push(value.trim());
                value = "";
            } else {
                value += char;
            }
        }
        result.push(value.trim()); // add the last value
        return result;
    };

    return (
        <>
            <h1>Washers Page</h1>
            {csvData.map((product, index) => (
                <ProductCard 
                    key={index} 
                    productName={product.name}
                    imageLink={product.ImageLink}
                />
            ))}
        </>
    );
}

export default Washers;
