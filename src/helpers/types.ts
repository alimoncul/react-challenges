export type Challenge = {
	self: string;
	title: string;
	description: string;
	file: string;
	difficulty: string;
};

export type User = {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
	gender: 'Male' | 'Female';
	date_of_birth: string;
};

export const DifficultyMap = {
	EASY: 0,
	MEDIUM: 1,
	HARD: 2,
};
