import { styled } from '@/styles/stitches.config'

export const Item = styled('div', {
  backgroundColor: '$white',
  border: '1px solid $GRAY400',
  margin: '10px 0',
  padding: 10,
  borderRadius: 3,
  fontSize: '0.85rem',
  whiteSpace: 'pre-wrap',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
})

export const ContentBox = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  width: '100%',
})
