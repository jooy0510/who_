'use client';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Card } from '@nextui-org/react';

export default function CalendarPage() {
  return (
    <div className="calendar-container">
      <Card className="w-full">
        <FullCalendar
          plugins={[dayGridPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'resourceTimelineWeek,dayGridMonth,timeGridWeek',
          }}
          initialView="dayGridMonth"
          nowIndicator={true}
          editable={true}
          selectable={true}
          selectMirror={true}
          initialEvents={[
            { title: 'nice event', start: new Date(), resourceId: 'a' },
          ]}
        />
      </Card>
    </div>
  );
}
