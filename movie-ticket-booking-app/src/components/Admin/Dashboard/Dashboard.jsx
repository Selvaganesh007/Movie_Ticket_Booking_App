import './Dashboard.scss';

function Dashboard() {
  return (
    <div className='Dashboard'>
    <div className='header'>Dashboard</div>
    <div className='Dashboard_Sales'>
      <div className='Sales_Details'>
        <h4 className='Sales_Details-header'>Sales details</h4>
        <div className='Ticket_Details'>
          <div className='Ticket_detail-Screen'>Screen 1: 432</div>
          <div className='Ticket_detail-Screen'>Screen 2: 501</div>
          <div className='Ticket_detail-Screen'>Screen 3: 234</div>
          <div className='Ticket_detail-Screen'>Screen 4: 120</div>
        </div>
      </div>
      <div className='chart'>Chart</div>
    </div>
    <div className='Screen_Details'>
      <div className='Screen_Detail-card'>
        <div className='Screen_no'>Screen 1</div>
        <div className='Movie_name'>Veeram</div>
        <div className='Shows'>10.30am, 2.30pm, 6.30pm, 10.30pm</div>
      </div>
      <div className='Screen_Detail-card'>
        <div className='Screen_no'>Screen 2</div>
        <div className='Movie_name'>Billa</div>
        <div className='Shows'>10.30am, 2.30pm, 6.30pm, 10.30pm</div>
      </div>
      <div className='Screen_Detail-card'>
        <div className='Screen_no'>Screen 3</div>
        <div className='Movie_name'>Sura</div>
        <div className='Shows'>10.30am, 2.30pm, 6.30pm, 10.30pm</div>
      </div>
      <div className='Screen_Detail-card'>
        <div className='Screen_no'>Screen 4</div>
        <div className='Movie_name'>Kadaisi Vivasayi</div>
        <div className='Shows'>10.30am, 2.30pm, 6.30pm, 10.30pm</div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard;