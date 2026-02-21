import mongoose, { Document, Schema } from 'mongoose';

export interface ITask extends Document {
    userId: mongoose.Types.ObjectId;
    title: string;
    description?: string;
    completed: boolean;
    priority: 'low' | 'medium' | 'high';
    dueDate?: Date;
}

const taskSchema = new Schema<ITask>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        completed: {
            type: Boolean,
            default: false,
        },
        priority: {
            type: String,
            enum: ['low', 'medium', 'high'],
            default: 'medium',
        },
        dueDate: {
            type: Date,
        },
    },
    {
        timestamps: true, // adds createdAt and updatedAt automatically
    }
);

const Task = mongoose.model<ITask>('Task', taskSchema);

export default Task;