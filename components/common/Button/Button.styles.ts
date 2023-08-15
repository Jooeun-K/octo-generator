import { styled } from '@/styles/stitches.config'

export const StyledButton = styled('button', {
  padding: '10px 16px',
  borderRadius: '5px',
  fontSize: '14px',
  border: '1px solid gray',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  wordBreak: 'keep-all',
  variants: {
    buttonType: {
      PRIMARY_FILLED: {
        background: '$colors$PRIMARY500',
        border: '1px solid $colors$PRIMARY500',
        color: 'white',
        '&:hover': {
          background: '$colors$PRIMARY600',
          border: '1px solid $colors$PRIMARY600',
        },
      },
      PRIMARY_OUTLINED: {
        background: 'white',
        border: '1px solid $colors$PRIMARY500',
        color: '$colors$PRIMARY500',
      },
      SECONDARY_FILLED: {
        background: '$colors$SECONDARY500',
        border: '1px solid $colors$SECONDARY500',
        color: 'white',
      },
      SECONDARY_OUTLINED: {
        background: 'white',
        border: '1px solid $colors$SECONDARY500',
        color: '$colors$SECONDARY500',
      },
      MONO_FILLED: {
        background: '$colors$GRAY800',
        border: '1px solid $colors$GRAY800',
        color: 'white',
      },
      MONO_OUTLINED: {
        background: 'white',
        border: '1px solid $colors$GRAY700',
        color: '#25262b',
      },
      DANGER_FILLED: {
        background: '$colors$WARNING500',
        border: '1px solid $colors$WARNING500',
        color: 'white',
      },
      DANGER_OUTLINED: {
        background: 'white',
        border: '1px solid $colors$WARNING500',
        color: '$colors$WARNING500',
      },
    },
    buttonSize: {
      SMALL: {
        padding: '8px 14px',
        fontSize: '0.8rem',
      },
      MEDIUM: {
        padding: '10px 16px',
        fontSize: '0.85rem',
      },
      LARGE: {
        padding: '12px 16px',
        fontSize: '1rem',
      },
    },
  },
})
