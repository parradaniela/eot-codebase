import { CommunityEvent } from '../../types';
import { formatDateWritten, getDayOfWeek } from '../../utils/date';

interface Props {
  event: CommunityEvent | undefined;
}

const EventListSingle = ({ event }: Props) => {
  console.log('SINGLE', event);

  if (!event) {
    return null;
  }

  return (
    <section className="event-container">
      <h3 className="event--detail-section">
        <span className="event--name">{event.eventType.type}</span>
        <span className="event--name-separator">-</span>
        <span className="event--day">{`${getDayOfWeek(event.date)},`}</span>
        <span className="event--date">{formatDateWritten(event.date)}</span>
      </h3>
      <p className="event--location"></p>
      <div className="event--confirmations-container">
        <div className="event--confirmation-label"></div>
      </div>
    </section>
  );
};

export default EventListSingle;
