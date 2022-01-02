interface AppointmentInterface {
    startTime: Date;
    endTime: Date;
    description: string;

    printAppointment(): void;
}

class Appointment implements AppointmentInterface {
    public startTime: Date;
    public endTime: Date;
    public description: string;

    constructor(
        startTimeInput: Date,
        endTimeInput: Date,
        descriptionInput: string,
    ) {
        this.startTime = startTimeInput;
        this.endTime = endTimeInput;
        this.description = descriptionInput;
    }

    printAppointment(): void {
        console.log(this.startTime);
        console.log(this.endTime);
        console.log(this.description);
    }
}
