export interface Course {
    id: number;
    title: string;
    status: string;
    updated_at: string;
    created_at: string;
    category: string;
    description: string;
    users_count?: number
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
    name: string,
    email: string;
    password: string;
    confirmPassword?: string
}

export interface Chat {
    message: string;
    created_at: string;
    id: string;
    role: string;
    updated_at: string;
}