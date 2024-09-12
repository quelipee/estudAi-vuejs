export interface Course {
    id: number;
    title: string;
    status: string;
    updated_at: string;
    created_at: string;
    category: string;
    description: string;
}

export interface Topic {
    id: number;
    title: string;
    topic: string;
    updated_at: string;
    created_at: string;
    course_id: number;
}

export interface User {
    email: string;
    password: string;
}