using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Scheduler.Shared
{

    public class AppointmentData 
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public Guid TimeTableLinkId { get; set; }
        public string Subject { get; set; }
        public Guid UserDataId { get; set; }

        public string Location { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }
        public string? Description { get; set; }
        public bool? IsAllDay { get; set; }
        public string? RecurrenceRule { get; set; }
        public string RecurrenceException { get; set; }
        public Nullable<int> RecurrenceID { get; set; }
    }


}
