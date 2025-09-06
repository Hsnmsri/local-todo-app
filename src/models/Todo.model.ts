export default interface Todo {
    id: string;
    text: string;
    color: string | null;
    completedAt: number | null;
    createdAt: number;
}