import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Title,
  SubTitle,
  FormGroup,
  FormSelect,
  FormText,
  FormInput,
  FormTextArea,
  BtnWrapper,
  BtnSocial,
  FormGroupSocial,
  IconSocial,
  BtnSubmit,
  BtnGoBack,
} from './styles';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    linkedin: '',
    twitter: '',
    youtube: '',
    instagram: '',
    facebook: '',
  });

  const [displaySocialInputs, setDisplaySocialInputs] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      company: loading || !profile.company ? '' : profile.company,
      website: loading || !profile.website ? '' : profile.website,
      location: loading || !profile.location ? '' : profile.location,
      status: loading || !profile.status ? '' : profile.status,
      skills: loading || !profile.skills ? '' : profile.skills.join(','),
      githubusername:
        loading || !profile.githubusername ? '' : profile.githubusername,
      bio: loading || !profile.bio ? '' : profile.bio,
      linkedin: loading || !profile.social ? '' : profile.social.linkedin,
      twitter: loading || !profile.social ? '' : profile.social.twitter,
      youtube: loading || !profile.social ? '' : profile.social.youtube,
      instagram: loading || !profile.social ? '' : profile.social.instagram,
      facebook: loading || !profile.social ? '' : profile.social.facebook,
    });
  }, [loading, getCurrentProfile, profile]);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <Title>Create Your Profile</Title>
      <SubTitle>
        <i className='fas fa-user' /> Let's get some information to make your profile
        stand out
      </SubTitle>
      <small>* = required field</small>
      <form onSubmit={onSubmit}>
        <FormGroup>
          <FormSelect name='status' value={status} onChange={onChange}>
            <option value='0'>* Select Professional Status</option>
            <option value='Developer'>Developer</option>
            <option value='Junior Developer'>Junior Developer</option>
            <option value='Senior Developer'>Senior Developer</option>
            <option value='Manager'>Manager</option>
            <option value='Student or Learning'>Student or Learning</option>
            <option value='Instructor'>Instructor or Teacher</option>
            <option value='Intern'>Intern</option>
            <option value='Other'>Other</option>
          </FormSelect>
          <FormText>Give us an idea of where you are at in your career</FormText>
        </FormGroup>
        <FormGroup>
          <FormInput
            type='text'
            placeholder='Company'
            name='company'
            value={company}
            onChange={onChange}
          />
          <FormText>Could be your own company or one you work for</FormText>
        </FormGroup>
        <FormGroup>
          <FormInput
            type='text'
            placeholder='Website'
            name='website'
            value={website}
            onChange={onChange}
          />
          <FormText>Could be your own or a company website</FormText>
        </FormGroup>
        <FormGroup>
          <FormInput
            type='text'
            placeholder='Location'
            name='location'
            value={location}
            onChange={onChange}
          />
          <FormText>City & state suggested (eg. Boston, MA)</FormText>
        </FormGroup>
        <FormGroup>
          <FormInput
            type='text'
            placeholder='* Skills'
            name='skills'
            value={skills}
            onChange={onChange}
          />
          <FormText>
            Please use comma separated values (eg. HTML,CSS,JavaScript,React)
          </FormText>
        </FormGroup>
        <FormGroup>
          <FormInput
            type='text'
            placeholder='GitHub Username'
            name='githubusername'
            value={githubusername}
            onChange={onChange}
          />
          <FormText>
            If you want your latest repos and a GitHub link, include your username
          </FormText>
        </FormGroup>
        <FormGroup>
          <FormTextArea
            placeholder='A short bio of yourself'
            name='bio'
            value={bio}
            onChange={onChange}
          />
          <FormText>Tell us a little about yourself</FormText>
        </FormGroup>

        <BtnWrapper>
          <BtnSocial
            type='button'
            onClick={() => setDisplaySocialInputs(!displaySocialInputs)}
          >
            Add Social Network Links
          </BtnSocial>
          <small>Optional</small>
        </BtnWrapper>

        {displaySocialInputs && (
          <Fragment>
            <FormGroupSocial>
              <IconSocial className='fab fa-linkedin fa-2x' color='linkedin' />
              <FormInput
                type='text'
                placeholder='LinkedIn URL'
                name='linkedin'
                value={linkedin}
                onChange={onChange}
              />
            </FormGroupSocial>
            <FormGroupSocial>
              <IconSocial className='fab fa-twitter fa-2x' color='twitter' />
              <FormInput
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={onChange}
              />
            </FormGroupSocial>
            <FormGroupSocial>
              <IconSocial className='fab fa-youtube fa-2x' color='youtube' />
              <FormInput
                type='text'
                placeholder='Youtube URL'
                name='youtube'
                value={youtube}
                onChange={onChange}
              />
            </FormGroupSocial>
            <FormGroupSocial>
              <IconSocial className='fab fa-instagram fa-2x' color='instagram' />
              <FormInput
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={onChange}
              />
            </FormGroupSocial>
            <FormGroupSocial>
              <IconSocial className='fab fa-facebook fa-2x' color='facebook' />
              <FormInput
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={onChange}
              />
            </FormGroupSocial>
          </Fragment>
        )}

        <BtnWrapper>
          <BtnSubmit type='submit' value='Submit' />
          <BtnGoBack to='/dashboard'>Go Back</BtnGoBack>
        </BtnWrapper>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

export default EditProfile;
