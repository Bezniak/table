export const generateColumns = async (): Promise<string[]> => {
    const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
    await delay(1500);
    const columnCount = Math.floor(Math.random() * (100 - 2 + 1)) + 2;
    return Array.from({length: columnCount}, (_, i) => `Обработка ${i + 1}`);
};

export const generateRows = async (columnCount: number): Promise<boolean[][]> => {
    const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
    await delay(1500);
    const rowCount = Math.floor(Math.random() * (100 - 2 + 1)) + 2;
    return Array.from({length: rowCount}, () =>
        Array.from({length: columnCount}, () => Math.random() < 0.5)
    );
};
