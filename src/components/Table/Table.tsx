import React, {useEffect, useState} from 'react';
import styles from './Table.module.css';
import {generateColumns, generateRows} from "../../utils/data.ts";
import Preloader from "../Preloader/Preloader.tsx";

const Table: React.FC = () => {
    const [columns, setColumns] = useState<string[]>([]);
    const [rows, setRows] = useState<boolean[][]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            const cols = await generateColumns();
            const rows = await generateRows(cols.length);
            setColumns(cols);
            setRows(rows);
            setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) {
        return <Preloader/>;
    }

    return (
        <div className={styles.tableContainer}>
            <h1>Таблица заказов и обработок</h1>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th></th>
                    {columns.map((col, index) => (
                        <th key={index} className={styles.verticalText}>{col}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        <td>{`Заказ ${rowIndex + 1}`}</td>
                        {row.map((cell, cellIndex) => (
                            <td
                                key={cellIndex}
                                className={cell ? styles.trueCell : styles.falseCell}
                            ></td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
