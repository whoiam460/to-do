import '../../../index.css'

const NavigationCards = () =>{

    return (
    <>
      <div className="cards-wrapper">
        <div className="cards-in-line">
          <div className="cards-body">
            <div className="cards-icon-count cards-count">
              <i  class="bi bi-calendar-date cards-icon-Today"></i>
              <span>0</span>
            </div>
            <span className="cards-body-name">Today</span>
          </div>
          <div className="cards-body">
            <div className="cards-icon-count cards-count">
              <i class="bi bi-calendar3 cards-icon-Scheduled"></i>
              <span>5</span>
            </div>
            <span className="cards-body-name">Scheduled</span>
          </div>
        </div>
        <div className="cards-in-line">
          <div className="cards-body">
            <div className="cards-icon-count cards-count">
              <i class="bi bi-inbox-fill cards-icon-All"></i>
              <span className="cards-body-name">25</span>
            </div>
            <span className="cards-body-name">All</span>
          </div>
          <div className="cards-body">
            <div className="cards-icon-count cards-count">
              <i class="bi bi-flag-fill cards-icon-Flagged"></i>
              <span>1</span>
            </div>
            <span className="cards-body-name">Flagged</span>
          </div>
        </div>
      </div>
    </>
  )

}


export default NavigationCards