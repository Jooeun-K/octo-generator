import { styled } from '@/styles/stitches.config'

export const StyledWrapper = styled('div', {})

export const StyledPreview = styled('div', {
  background: '#ABC0D1',
  width: '390px',
  minHeight: '844px',
  border: '1px solid $PRIMARY500',
  display: 'flex',
  flexDirection: 'column',
})

export const PreviewHead = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  height: 42,

  '& .leftBox, & .rightBox': {
    width: 100,
    background: 'white',
  },

  '& .titleBox': {
    padding: 10,
    fontSize: '1.1rem',

    '& .title': {
      fontWeight: 500,
    },
    '& .member': {
      fontWeight: 400,
      paddingLeft: 4,
      fontSize: '1rem',
      color: '$GRAY700',
    },
  },
})

export const PreviewBody = styled('div', {
  height: 'calc(844px - 102px)', // 102 = PreviewHead + PreviewInput && preview 전체 height 변수화 필요
})

export const PreviewInput = styled('div', {
  height: 60,
  background: 'yellow',
})

export const ButtonBox = styled('div', {
  textAlign: 'center',
  padding: '10px',
})
