
import React from 'react';
import styles from './styles.scss';
import col from '../Colomn/styles.scss';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={16}
    options={{
      zoomControl: false,
      panControl: false,
      scaleControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true
    }}
    defaultCenter={{ lat: 52.0588576, lng: 5.167113 }}
  >
  </GoogleMap>
));

class Travel extends React.Component {
  constructor(props) {
    super(props);

    this.handleMapLoad = this.handleMapLoad.bind(this);
  }

  handleMapLoad(map) {
    console.log(map);
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }

  render() {
    return (
      <section>
        <section className={styles['container']}>
          <div className={col['col']}>
            <div className={styles['text']}>
              <h2>Fort Vechten</h2>
            </div>
          </div>
          <div className={col['col'] + ' ' + styles['fort-vechten']}/>
        </section>
        <section className={styles['container']}>
          <div className={col['col']}>
            <GettingStartedGoogleMap
              containerElement={
                <div style={{ height: `100%` }} />
              }
              mapElement={
                <div style={{ height: `100%` }} />
              }
              onMapLoad={this.handleMapLoad}
            />
          </div>
          <div className={col['col']}>
            <div className={styles['text']}>
              <h3>Locatie</h3>
            </div>
          </div>
        </section>
        {/*<section className={styles['container']}>*/}
          {/*<div className={styles['green-wall']}/>*/}
          {/*<div className={styles['furnace']}/>*/}
        {/*</section>*/}
      </section>
    );
  }
}

export default Travel;
