import React, { Component } from 'react';
import { Col, Container } from 'react-bootstrap';
import Header from '../Header/Header';

export default class VaccinesInfo extends Component {
  render() {
    return (
      <>
        <Header headerText="Vaccines Info" infoState={false} />
        <Container>
          <Col xs={12}>
            <br />
            <h1 style={{ textAlign: 'center' }}>General Vaccine Information</h1>
            <br />
            <br />
            <h3>How They Work</h3>
            <p>
              Help lower risk of infection by working with the body’s natural defenses to develop
              protection against a disease.
            </p>
            <p>Vaccines are mainly made up of antigens which are:</p>
            <li>not alive and contain killed (inactivated) germs</li> OR
            <li>are alive but contain weakened (attenuated) germs</li>
            <br />
            <p>
              The body’s immune system uses antigens to create antibodies and immune memory. This
              helps the immune system destroy germ threats before they become dangerous, which helps
              prevent or lessen the impact of diseases.
            </p>
            <h3>How They Are Given</h3>
            <p>Most vaccines are given by needle into the upper arm or thigh.</p>
            <p>Some are given by mouth.</p>
            <p>There is one influenza vaccine that is sprayed into the nose for children.</p>
            <p>
              Some vaccines protect against multiple diseases in one shot, as a body’s immune system
              can safely learn from more than one vaccine at a time.
            </p>
            <h3>Vaccine Effectiveness</h3>
            <p>Most childhood vaccines provide over 90% protection.</p>
            <p>
              Some people may only develop partial protection following a vaccination, this may be
              due to:
            </p>
            <li>age of the person</li>
            <li>overall health status</li>
            <li>person’s immune response</li>
            <li>degree match between the vaccine and type of bacteria or virus circulating</li>
            <p>
              In rare cases, people who have partial immunity can get the disease, but the vaccine
              helps with prevention of severe illness and serious outcome, including death.
            </p>
            <p>
              The more people who are vaccinated in a community, the lower the risk for those who
              have partial immunity or those who have not gotten the vaccine, this is call{' '}
              <b>community or herd immunity.</b>
            </p>
            <p>Community immunity helps those are high risk, such as:</p>
            <li>infants and children too young to be fully vaccinated adults age 65+</li>
            <li>
              people with health condition affecting their immune system who cannot get vaccines
            </li>
            <br />
            <h3>Vaccine Side Effects</h3>
            <p>Like any medication, vaccines can cause side effects and reactions.</p>
            <p>
              After being vaccinated, it is common to have temporary side effects which can last
              from a few hours to a few weeks.
            </p>
            <p>
              This is the body’s natural “inflammatory response”, as it is building immunity against
              the disease.
            </p>
            <p>Common side effects may include:</p>
            <li>Mild fever</li>
            <li>Flu-like symptoms, such as:</li>
            <li>chills</li>
            <li>fatigue</li>
            <li>joint pain</li>
            <li>headache</li>
            <li>muscle aches</li>
            <li>Redness, soreness, or swelling where the vaccine was given</li>
            <li>Children being more fussy than usual</li>
            <br />
            <p>
              You can take medication to help with any pain or fever. Simply ask your health care
              provider for recommendations.
            </p>
            <h3>Rare Reactions</h3>
            <p>There is a small chance of anaphylaxis reactions to vaccines.</p>
            <p>Only happens to approximately 1 person in every 1 million people.</p>
            <p>Will happen shortly after the person receives the vaccine.</p>
            <p>
              Health care providers will ask patients to stay in the clinic for at least 15 minutes
              after the vaccine to monitor for this.
            </p>
            <p>
              Should it occur, the health care provider will deal with it quickly and report it to
              the public health department.
            </p>
            <h3>Vaccines Don’t Cause Autism</h3>
            <p>
              Researchers and scientists around the world have{' '}
              <b>
                proven there is <u>NO</u> link between vaccines and autism.
              </b>
            </p>
            <p>
              This rumor started when <i>The Lancet</i> (a British medical journal) published a
              study in 1998 by doctor Andrew Wakefield, claiming that the measles, mumps, rubella
              (MMR) vaccine caused autism.
            </p>
            <p>
              Since then, many larger studies have explored the same topic and have proven that
              there is no difference in the rate of autism between people with and people without
              vaccines. The article was also retracted by <i>The Lancet</i>.
            </p>
            <h3>Vaccine Safety</h3>
            <p>
              Vaccines must be tested several times to ensure they are safe for use before being
              approved in Canada.
            </p>
            <p>They undergo regulation checks by:</p>
            <li>Health Canada</li>
            <li>The Public Health Agency of Canada (PHAC)</li>
            <li>Provincial / Territorial Health Authorities</li>
            <li>The National Advisory Committee on Immunization</li>
            <br />
            <p>
              After vaccines are approved, they are regularly checked for safety and effectiveness
              by:
            </p>
            <li>Nurses</li>
            <li>Doctors</li>
            <li>Pharmacists</li>
            <li>Pharmaceutical companies who make them</li>
            <li>Provincial / Territorial Health Authorities</li>
            <li>Health Canada scientists</li>
            <li>Public Health Agency of Canada</li>
          </Col>
        </Container>
        <br />
        <br />
      </>
    );
  }
}
