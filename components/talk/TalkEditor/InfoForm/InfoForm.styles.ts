import { styled } from '@/styles/stitches.config'

export const InfoHead = styled('h2', {
  fontSize: 20,
  borderBottom: '1px solid $GRAY400',
  padding: 10,
  marginBottom: 10,
})

export const TitleRow = styled('div', {
  display: 'flex',
  gap: 10,
  alignItems: 'center',
  padding: '10px 0',
})

export const UsersRow = styled('div', {
  display: 'flex',
  gap: 10,
  alignItems: 'center',
  padding: '10px 0',
})

export const UserList = styled('ul', {
  display: 'flex',
  gap: 7,
  flexWrap: 'wrap',
  padding: '10px',
})

export const UserListItem = styled('li', {
  display: 'flex',
  alignItems: 'center',
  color: '$GRAY800',
  position: 'relative',
  background: 'white',
  borderRadius: '10px',
  padding: '0 10px 0 0 ',
  border: '1px solid $GRAY200',
  width: 'calc(100% / 2 - 7px)',
  minWidth: 230,

  '& button': {
    cursor: 'pointer',
  },
})

export const ProfileBox = styled('div', {
  width: 60,
  height: 60,
  borderRadius: '10px 0 0 10px',
  overflow: 'hidden',
  border: '1px solid $GRAY400',

  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
})

export const ProfileUploadButton = styled('button', {
  width: '100%',
  height: '100%',
  borderRadius: '10px 0 0 10px',
  background: '$PRIMARY500',
  border: '1px solid $PRIMARY500',
  color: 'rgba(255, 255, 255, 0.7)',
})

export const UserName = styled('div', {
  color: '$GRAY800',
  padding: '10px 10px 10px 0',
  textAlign: 'left',
  width: 'calc(100% - 110px)',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})

export const DeleteButton = styled('button', {
  background: '$PRIMARY100',
  border: '1px solid $PRIMARY500',
  padding: '5px 10px',
  color: '$PRIMARY600',
  borderRadius: 3,
})

export const NoUser = styled('span', {
  display: 'block',
  width: '100%',
  padding: '10px',
  fontSize: '0.8rem',
  color: '$WARNING500',
  textAlign: 'center',
  border: '1px dashed $GRAY400',
})

export const CheckboxBox = styled('div', {
  padding: 10,
})

export const SelectMeBox = styled('div', {})

export const SelectMeFieldSet = styled('fieldset', {
  border: '1px dashed $GRAY400',
  background: 'white',
  borderRadius: 10,
  padding: 10,
  display: 'flex',
  fontSize: '0.9rem',
  '& .radio-box': {
    padding: '3px 8px',
    display: 'flex',
    gap: 5,
    '& label': {
      cursor: 'pointer',
    },
  },
})

export const SelectMeLegend = styled('legend', {
  padding: '5px 10px 3px',
  color: 'white',
  background: '$GRAY800',
  fontSize: '0.9rem',
  fontWeight: 400,
  borderRadius: 3,
})
