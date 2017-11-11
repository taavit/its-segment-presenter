/**
 * List all statistics
 */

import Card from 'material-ui/Card/Card';
import CardHeader from 'material-ui/Card/CardHeader';
import CardText from 'material-ui/Card/CardText';

import * as React from 'react';

import { IMeasurement } from './../model/IMeasurement';
import { ISegment } from './../model/ISegment';
import { IStatPoint } from './../model/IStatPoint';
import { SegmentMap } from './SegmentMap';
import { StatChart } from './StatChart';

interface ISegmentName {
    [id: string]: string;
}

const SEGMENTS_MAPPING: ISegmentName = {
    1: 'Rondo Biłyka -> al. Włókniarzy -> Rondo Korfantego',
    2: 'Rondo Biłyka -> ul. Zgierska -> ul. Zgierska/ul. Pojezierska',
    3: 'ul.Zgierska/ul. Julianowska -> ul. Zgierska -> Rondo Biłyka ',
    4: 'ul.Zgierska/ul. Pojezierska -> ul. Pojezierska -> al. Włókniarzy -> Rondo Korfantego',
    5: 'ul.Zgierska/ul. Pojezierska -> ul. Zgierska -> ul. Zachodnia -> ul. Zachodnia/ul. Ogrodowa',
    6: 'ul. Zachodnia/ul. Ogrodowa -> ul. Zachodnia -> ul. Zgierska -> ul.Zgierska/ul. Pojezierska',
    7: 'ul. Zachodnia/ul. Ogrodowa -> ul. Zachodnia -> ul. Kościuszki -> ul. Kościuszki/al. Mickiewicza',
    8: 'ul. Kościuszki/al. Mickiewicza -> ul. Kościuszki -> ul. Zachodnia -> ul. Zachodnia/ul. Ogrodowa',
    9: 'ul. Kościuszki/al. Mickiewicza -> al. Mickiewicza -> al. Włókniarzy/al. Mickiewicza',
    10: 'al. Jana Pawła II/al. Mickiewicza -> al. Jana Pawła II -> al. Jana Pawła II/ul. Pabianicka',
    12: 'al. Jana Pawła II/ul. Pabianicka -> ul. Pabianicka -> RLL -> ul. Paderewskiego -> ul. Rzgowska/ul. Paderewskiego',
    13: 'Rondo Korfantego -> al. Włókniarzy -> ul. Pojezierska -> ul.Zgierska/ul. Pojezierska',
    14: 'Rondo Korfantego -> al. Włókniarzy -> Rondo Biłyka',
    15: 'Rondo Korfantego -> al. Włókniarzy -> al. Włókniarzy/ul. Legionów',
    16: 'al. Włókniarzy/ul. Legionów -> al. Włókniarzy -> Rondo Korfantego',
    17: 'al. Włókniarzy/ul. Legionów -> al. Włókniarzy -> al. Włókniarzy/al. Mickiewicza',
    18: 'al. Włókniarzy/al. Mickiewicza -> al. Włókniarzy -> al. Włókniarzy/ul. Legionów',
    19: 'al. Jana Pawła II/al. Mickiewicza -> al. Jana Pawła II -> al. Jana Pawła II/ul. Pabianicka',
    20: 'al. Włókniarzy/al. Mickiewicza -> al. Mickiewicza -> ul. Piłsudskiego -> Marszałków',
    21: 'ul. Rzgowska/ul. Paderewskiego -> ul. Paderewskiego -> RLL -> ul. Pabianicka -> al. Jana Pawła II/ul. Pabianicka',
    22: 'ul. Rzgowska/ul. Broniewskiego -> ul. Broniewskiego -> al. Śmigłego-Rydza -> al. Śmigłego-Rydza/ul. Przybyszewskiego',
    23: 'al. Śmigłego-Rydza/ul. Przybyszewskiego -> al. Śmigłego-Rydza -> ul. Broniewskiego -> ul. Rzgowska/ul. Broniewskiego',
    24: 'al. Śmigłego-Rydza/ul. Przybyszewskiego -> al. Śmigłego-Rydza -> Marszałków',
    25: 'ul. Kościuszki/al. Mickiewicza -> ul. Piłsudskiego -> Marszałków',
    26: 'Marszałków -> al. Śmigłego-Rydza -> al. Śmigłego-Rydza/ul. Przybyszewskiego',
    27: 'Marszałków -> ul. Piłsudskiego -> ul. Rokicińska -> ul. Rokicińska/al. Hetmańska',
    28: 'Marszałków -> ul. Kopcińskiego -> al. Palki -> ul. Strykowska/ul. Wojska Polskiego',
    29: 'ul. Wojska Polskiego/al. Palki -> al. Palki -> ul. Kopcińskiego -> Marszałków',
    30: 'ul. Rokicińska/al. Hetmańska -> ul. Rokicińska -> ul. Piłsudskiego -> Marszałków',
    31: 'Rondo Biłyka -> al. Sikorskiego -> ul. Łagiewnicka -> ul. Inflancka -> ul. Inflancka/ul. Strykowska',
    32: 'ul. Julianowska/ul. Zgierska -> ul. Julianowska -> ul. Inflancka -> ul. Inflancka/ul. Strykowska',
    33: 'ul. Wojska Polskiego/ul. Strykowska -> ul. Strykowska -> ul. Inflancka/ul. Strykowska',
    35: 'ul. Inflancka/ul. Strykowska -> ul. Inflancka -> ul. Łagiewnicka -> al. Sikorskiego -> Rondo Biłyka',
    36: 'ul. Inflancka/ul. Strykowska -> ul. Inflancka -> ul. Julianowska -> ul. Julianowska/ul. Zgierska',
    37: 'ul. Inflancka/ul. Strykowska -> ul. Strykowska -> ul. Strykowska/ul. Wojska Polskiego'
};

interface IStatCardProps {
    segment: ISegment;
    measurements: IMeasurement[];
}

// tslint:disable-next-line:variable-name
const StatCard: React.StatelessComponent<IStatCardProps> = ({ segment, measurements }) => (
    <Card>
        <CardHeader
            title={`${segment.segment_code}. ${SEGMENTS_MAPPING[segment.segment_code]}`}
            actAsExpander={true}
            showExpandableButton
        />
        <CardText expandable={true}>
        <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-around'}}>
            <StatChart
                points={measurements}
                label={`${segment.segment_code}. ${SEGMENTS_MAPPING[segment.segment_code]}`}
            />
            <SegmentMap points={segment.points} />
            </div>
        </CardText>
    </Card>
);

export interface IStatsProps {
    measurements: ReadonlyArray<IMeasurement>;
    segments: ReadonlyArray<ISegment>;
}

// tslint:disable-next-line:variable-name
export const AllStats: React.StatelessComponent<IStatsProps> = (props: IStatsProps): JSX.Element => (
    <div>
        {props.segments.map(
            (segment) => <StatCard
                key={segment.segment_code}
                measurements={props.measurements.filter(({ segment_code }) => segment_code === segment.segment_code)}
                segment={segment}
            />
        )}
    </div>
);
