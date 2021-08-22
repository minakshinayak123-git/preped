const Footer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
      <div className='space-y-4 text-xs text-gray-500'>
        <h5 className='font-bold'>LINKS</h5>
        <p className='footer'>FAQ</p>
        <p className='footer'>SiteMap</p>
      </div>
      <div className='space-y-4 text-xs text-gray-500'>
        <h5 className='font-bold'>LEGAL</h5>
        <p className='footer'>Terms of use</p>
        <p className='footer'>Privacy policy</p>
        <p className='footer'>Refund policy</p>
      </div>

      <div className='space-y-4 text-xs text-gray-500'>
        <h5 className='font-bold'>SOCIAL</h5>
        <p className='footer'>Facebook</p>
        <p className='footer'>LinkedIn</p>
        <p className='footer'>YouTube</p>
      </div>

      <div className='space-y-4 text-xs text-gray-500'>
        <h5 className='font-bold'>COMPANY</h5>
        <p className='footer'>About Us</p>
        <p className='footer'>Contact</p>
      </div>
    </div>
  )
}

export default Footer
