export type Challenge = {
    self: string
    title: string
    description: string
    file: string
    difficulty: string
}

export const DifficultyMap = {
    'EASY': 0,
    'MEDIUM': 1,
    'HARD': 2
}