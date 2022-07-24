import type { NextPage } from 'next';
import {
  Button,
  ButtonSet,
  TextInput,
  Grid,
  NumberInput,
  Column,
  Form,
} from 'carbon-components-react';

import HeadNext from '../components/Head/Head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeadNext />
      <Header />
      <Grid style={{ marginTop: 60, marginBottom: 60 }}>
        <Column sm={4} md={{ span: 4, offset: 2 }} lg={{ span: 4, offset: 6 }}>
          <h4 style={{ marginTop: 20, marginBottom: 20 }}>Configuration Opendaylight</h4>
          <Form>
            <TextInput
              data-modal-primary-focus
              id="host"
              labelText="Hostname"
              placeholder="10.10.10.1"
              style={{ marginBottom: '1rem' }}
            />
            <NumberInput
              data-modal-primary-focus
              id="port"
              label="Port"
              value={8181}
              hideSteppers={true}
              step={0}
              allowEmpty={false}
              iconDescription="Port"
              style={{ marginBottom: 40 }}
            />
            <ButtonSet>
              <Button kind="primary">Save</Button>
              <Button kind="secondary">Cancel</Button>
            </ButtonSet>
          </Form>
        </Column>
      </Grid>
      <Footer />
    </div>
  );
};

export default Home;
