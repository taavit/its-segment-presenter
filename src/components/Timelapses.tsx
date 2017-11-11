/**
 * Timelapses tab
 */

import Card from 'material-ui/Card/Card';
import CardHeader from 'material-ui/Card/CardHeader';
import CardText from 'material-ui/Card/CardText';

import * as React from 'react';

interface ITimelapseData {
    place: string;
    date: string;
    id: string;
}

const data: ReadonlyArray<ITimelapseData> = [
    {
        place: 'doly',
        date: '2016.06.28',
        id: 'PrbZh50BMEw'
    },
    {
        place: 'doly',
        date: '2016.06.29',
        id: 'mhOOXZ4RkDA'
    },
    {
        place: 'doly',
        date: '2016.06.30',
        id: '4181PBz7Euo'
    },
    {
        place: 'doly',
        date: '2016.07.01',
        id: '64imuCQ-Hhg'
    },
    {
        place: 'doly',
        date: '2016.07.02',
        id: 'Yj1TUj2hXoM'
    },
    {
        place: 'doly',
        date: '2016.07.03',
        id: 'fHog5a7CgNo'
    }
];

// tslint:disable-next-line:variable-name
const TimelapseCard: React.StatelessComponent<{timelapse: ITimelapseData}> = ({ timelapse }) => (
    <Card>
        <CardHeader
            title={ timelapse.date }
            actAsExpander
            showExpandableButton
        />
        <CardText expandable>
            <iframe
                width='480'
                height='270'
                src={ `//www.youtube.com/embed/${timelapse.id}` }
                style={ {border: 0} }
                sandbox='allow-same-origin allow-popups'
            />
        </CardText>
    </Card>
);

// tslint:disable-next-line:variable-name
export const Timelapses: React.StatelessComponent = (): JSX.Element => (
    <div>
        <Card>
        <CardHeader
            title='Kamera Toya@Doły'
            subtitle='2016.06.23 - 2016.07.03'
            actAsExpander
            showExpandableButton
        />
        <CardText expandable>
            {data.map((entry) => <TimelapseCard timelapse={entry} key={entry.id}/>)}
        </CardText>
        </Card>
    </div>
);
