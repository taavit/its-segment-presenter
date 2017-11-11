import { AppBar, Tab, Tabs } from 'material-ui';
import * as React from 'react';

import { AllStats } from './AllStats';
import { Timelapses } from './Timelapses';

import { IMeasurement } from './../model/IMeasurement';
import { ISegment } from './../model/ISegment';

interface IItsAppState {
    measurements: ReadonlyArray<IMeasurement>;
    segments: ReadonlyArray<ISegment>;
}

/**
 * Main application
 */
export class ItsApp extends React.Component<{}, IItsAppState> {
    public constructor(props: {}) {
        super(props);
        this.state = {
            segments: [],
            measurements: []
        };
    }

    public componentDidMount(): void {
        fetch('/data/segments.json')
            .then((response: Response) => response.json())
            .then((segments: ReadonlyArray<ISegment>) => {
                this.setState({ segments });
            });
        fetch('/data/measurements.json')
            .then((response: Response) => response.json())
            .then((measurements: ReadonlyArray<IMeasurement>) => {
                this.setState({ measurements});
            });
    }

    public render() {
        return (
            <div>
                <AppBar
                    title='Obserwator'
                    showMenuIconButton={ false }
                />
                  <Tabs>
                    <Tab label='ITS - Odcinki' >
                        <AllStats
                            measurements={ this.state.measurements }
                            segments={ this.state.segments }
                        />
                    </Tab>
                    <Tab label='Timelapsy'>
                        <Timelapses />
                    </Tab>
                </Tabs>
            </div>
        );
    }
}
