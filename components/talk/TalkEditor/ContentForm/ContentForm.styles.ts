import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  border: '1px dashed $GRAY400',
  background: 'white',
  padding: 10,
  margin: '10px 0',
  borderRadius: '10px',
})

export const ContentHead = styled('h2', {
  fontSize: 18,
  padding: 10,
  marginBottom: 10,
})
