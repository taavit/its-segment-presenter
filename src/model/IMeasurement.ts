/**
 * Interface for measurement
 */

export interface IMeasurement {
    date_of_measurement: string;
    segment_code: string;
    avg_speed: number;
    avg_time: number;
    avg_car_per_hour: number;
    avg_car_intensity: number;
    segment_hash: string;
    status: number;
}
