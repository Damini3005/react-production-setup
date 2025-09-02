import type { Todo } from 'src/types/todo'

interface TodoSummaryProps {
    todos: Todo[]
    deleteAllCompleted: () => void
}

export default function TodoSummary({ todos, deleteAllCompleted }: TodoSummaryProps) {
    const completedTodos = todos.filter((todo) => todo.completed)

    return (
        <div className="text-center space-y-2">
            <p className="text-sm font-medium">
                {completedTodos.length}/{todos.length} todos completed
            </p>
            {completedTodos.length > 0 && (
                <button
                    onClick={deleteAllCompleted}
                    className="text-sm bg-red-500  hover:underline font-medium">
                    Delete All Completed
                </button>
            )}
        </div>
    )
}
