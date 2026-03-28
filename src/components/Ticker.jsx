import './Ticker.css'

const ITEMS = [
  'HRMS','CRM','ERP','Service Ticketing','Hostel Management','Library Management',
  'Toll Management','RFID Tracking','VMS','Video Analytics','Face Recognition',
  'MDM','NMS','Next-Gen Firewall','SD-WAN','Visitor Management','Fleet Tracking',
]

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {doubled.map((item, i) => (
          <div key={i} className="ticker-item">{item}</div>
        ))}
      </div>
    </div>
  )
}
