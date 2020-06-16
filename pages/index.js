import React, { Fragment } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStoreState } from "easy-peasy";
import Fbox from "fbox";

import Layout from "../components/Layout";

const Portfolio = styled.div`
  p {
    padding: 0px;
    margin: 5px 0;
  }
  /* display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px; */
`;

const ProfileHeader = styled.div`
  /* display: grid;
  grid-template-columns: 150px auto;
  grid-column-gap: 20px; */
  display: flex;
  margin-bottom: 20px;
`;

const ProfileContent = styled.div`
  /* display: grid;
  grid-column-gap: 25px;
  grid-template-columns: auto 300px; */
  display: flex;
  transition: ease-in 0.2s;
  flex-direction: column;
  @media screen and (min-width: 720px) {
    flex-direction: row;
  }
`;

const Profile = styled.div`
  /* display: grid; */
  /* grid-row-gap: 25px; */
`;

const ProfileSection = styled.div`
  margin-bottom: 25px;
  .label {
    /* display: grid;
    grid-template-columns: 30px auto; */
    display: flex;
    flex-direction: row;
    .icon {
      padding-top: 5px;
      min-width: 40px;
    }
  }
`;

const WorkSection = styled.div`
  margin-bottom: 25px;
  padding: 0 20px;
  .section {
    margin-bottom: 20px;
  }
  .place {
    /* width: 100%; */
    margin-left: -20px;
    padding: 5px 20px;
    background: #eee;
    border-radius: ${props => props.theme.border.radius};
    margin-bottom: 5px;
    line-height: 18px;
  }
  .detail {
    /* padding: 0 20px; */
  }
  .highlight {
    border: 1px solid #ccc;
    padding: 5px;
  }
`;

const Display = styled.div`
  margin-right: 20px;
  img {
    width: 100px;
    height: 100px;
    @media screen and (min-width: 720px) {
      width: 150px;
      height: 150px;
    }
    border-radius: 100px 100px 100px 100px;
    transition: ease-in 0.2s;
    box-shadow: ${props => props.theme.shadow[0]};
  }
  img:hover {
    box-shadow: ${props => props.theme.shadow[1]};
  }
`;

const TagGroup = styled.div`
  padding-left: 10px;
`;

const Tag = styled.div`
  display: inline-block;
  padding: 2px 10px;
  background-color: #eee;
  border-radius: ${props => props.theme.border.radius};
  margin: 0 5px 5px 0;
`;

const PortFolioPaper = () => {
  const {
    profileData,
    skillsData,
    interestData,
    worksData,
    educationsData
  } = useStoreState(state => state.portfolio);
  return (
    <Portfolio>
      <ProfileHeader>
        <Display>
          <img src="/static/img/display.jpg" alt="display" />
        </Display>
        <Fbox column center>
          <h4>Kittapard Puime</h4>
          <h6>
            Front-End Developer
            <br />
            Thinking of ways of combining art and programming
            <br />
            and experience of backend developer.
          </h6>
        </Fbox>
      </ProfileHeader>
      <ProfileContent>
        <Profile>
          <h5>
            <i>WORK EXPERIENCE</i>
          </h5>
          <WorkSection>
            {worksData.map(work => (
              <div className="section">
                <div className="place">
                  <a href={work.link} target="_blank">
                    <b>{work.locationName}</b>
                  </a>
                  <p>{work.time}</p>
                </div>
                <div className="detail">
                  <p>
                    <b>{work.position}</b>
                  </p>
                  <p>{work.workDetail}</p>
                  {work.highlights.map(highlight => (
                    <p className="highlight">{highlight}</p>
                  ))}
                </div>
              </div>
            ))}
          </WorkSection>
          <h5>
            <i>EDUCATION</i>
          </h5>
          <WorkSection>
            {educationsData.map(work => (
              <div className="section">
                <div className="place">
                  <a href={work.link} target="_blank">
                    <b>{work.locationName}</b>
                  </a>
                  <p>{work.time}</p>
                </div>
                <div className="detail">
                  <p>
                    <b>{work.position}</b>
                  </p>
                  <p>{work.workDetail}</p>
                  {work.highlights.map(highlight => (
                    <p className="highlight">{highlight}</p>
                  ))}
                </div>
              </div>
            ))}
          </WorkSection>
        </Profile>
        <Profile>
          <ProfileSection>
            <h5>
              <i>SKILLS</i>
            </h5>
            {skillsData.map(skill => (
              <Fragment>
                <p>
                  <b>{skill.name}</b> {skill.level}
                </p>
                <TagGroup>
                  {skill.items.map(item => (
                    <Tag>{item}</Tag>
                  ))}
                </TagGroup>
              </Fragment>
            ))}
          </ProfileSection>

          <ProfileSection>
            <h5>
              <i>INTEREST</i>
            </h5>

            {interestData.map(interest => (
              <Fragment>
                <p>
                  <b>{interest.name}</b>
                </p>
                <TagGroup>
                  {interest.items.map(item => (
                    <Tag>{item}</Tag>
                  ))}
                </TagGroup>
              </Fragment>
            ))}
          </ProfileSection>
          <ProfileSection>
            <h5>
              <i>CONTRACT</i>
            </h5>
            {profileData.contract.map(item => (
              <div className="label">
                <div className="icon">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                {item.link ? (
                  <a href={item.link} target="_blank">
                    <p>{item.text}</p>
                  </a>
                ) : (
                  <p>{item.text}</p>
                )}
              </div>
            ))}
          </ProfileSection>
        </Profile>
      </ProfileContent>
    </Portfolio>
  );
};

const Index = props => {
  return (
    <Layout>
      <PortFolioPaper />
    </Layout>
  );
};

export default Index;
