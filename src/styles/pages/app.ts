import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const CartContainer = styled('button', {
  padding: 12,
  border: 'none',
  borderRadius: 6,
  background: '$gray800',
  cursor: 'pointer', 

  svg: {
    color: '$gray400',
  },

  '&:hover': {
    color: '$gray300',
  }

})

export const CartTitle = styled('h1', {
  fontFamily: 'Roboto',
  fontSize: '$lg',
  fontWeight: 'bold',
  lineHeight: '160%',

  color: '$gray100',

  marginBottom: '31px',
})

export const CartContent = styled('div', {
  height: '60vh', 
  overflow: 'auto',
}) 

export const CartItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 20,

  marginBottom: '24px',
})

export const CartImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  width: '101.94px',
  height: '93px',
  borderRadius: 8,
})

export const CartDescription = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  p: {
    fontSize: '$md',
    color: '$gray300',    
    marginBottom: 6,
  },

  span: {
    fontSize: '$md',
    fontWeight: 'bold',
    color: '$gray100',
    marginBottom: 10,
  },

  a: {
    color: '$green500',
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: '160%',
  }
})

export const CartFooter = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  button: {
    marginTop: 'auto',
    width: '100%',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    }
  }
})

export const CartQuantity = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 7,

  p: {
    fontSize: 16,
    color: '$gray100',
    lineHeight: '160%',
    fontWeight: 'normal',
  },

  span: {
    fontSize: 18,
    color: '$gray100',
    lineHeight: '160%',
    fontWeight: 'normal',
  }


})

export const CartPrice = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 57,
  p: {
    fontSize: 18,
    color: '$gray100',
    lineHeight: '160%',
    fontWeight: 'bold',
  },

  span: {
    fontSize: 24,
    color: '$gray100',
    lineHeight: '140%',
    fontWeight: 'bold',
  }
})