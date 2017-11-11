/**
 * Interface for segment
 */
import { IPoint } from './IPoint';

export interface ISegment {
    id: string;
    segment_code: string;
    points: IPoint[];
}
