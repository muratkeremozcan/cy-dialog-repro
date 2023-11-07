import NewModal from '../NewModal'

const ContactModal = ({onClose}) => {
  const _handleSubmit = evt => {
    evt.preventDefault()
    console.log('post data')
  }
  return (
    <NewModal
      footer={
        <>
          <button form="contactForm" type="submit">
            OK
          </button>
          <button onClick={onClose}>Cancel</button>
        </>
      }
      header={<div>Contact Info</div>}
    >
      <form id="contactForm" onSubmit={_handleSubmit}>
        <label className="vert-label">
          Name
          <input type="text" />
        </label>

        <label className="vert-label">
          Email
          <input type="text" />
        </label>
      </form>
    </NewModal>
  )
}

export default ContactModal
