// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {id, title, date, isStared} = appointmentDetails

  const onClickStar = () => {
    toggleIsStarred(id)
  }

  const isStarredImageUrl = isStared
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="appointment-item">
      <div className="appointment-header-container">
        <p className="title-text">{title}</p>

        <button
          className="star-button"
          type="button"
          testid="star"
          onClick={onClickStar}
        >
          <img src={isStarredImageUrl} alt="star" />
        </button>
      </div>
      <p className="date-text">Date: {date}</p>
    </li>
  )
}

export default AppointmentItem
