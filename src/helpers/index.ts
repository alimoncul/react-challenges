import DescriptionsJSON from '../descriptions.json';
import { Challenge, DifficultyMap } from './types';

export const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));
export const sortChallenges = () => {
	const challenges: Challenge[] = [];
	Object.values(DescriptionsJSON).forEach((challenge) =>
		challenges.push(challenge)
	);
	return challenges.sort(
		(a, b) =>
			DifficultyMap[a.difficulty as keyof typeof DifficultyMap] -
			DifficultyMap[b.difficulty as keyof typeof DifficultyMap]
	);
};
