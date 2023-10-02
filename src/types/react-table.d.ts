import '@tanstack/react-table';

declare module '@tanstack/react-table' {
    interface TableMeta<T> {
        deleteRow: (rowIndex: number) => void;
        editCell: (
            newValue: string,
            rowIndex: number,
            columnId: string
        ) => void;
    }
}
