import '@tanstack/react-table';

declare module '@tanstack/react-table' {
    interface TableMeta<T> {
        deleteRow: (rowIndex: number) => void;
    }
}
