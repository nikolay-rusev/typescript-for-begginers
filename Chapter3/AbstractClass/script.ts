interface AppointmentInterface {
    startTime: Date;
    endTime: Date;
    description: string;

    printAppointment(): void;
}

abstract class AppointmentABC {
    protected startTime: Date;
    protected endTime: Date;
    protected description: string;

    constructor(
        startTimeInput: Date,
        endTimeInput: Date,
        descriptionInput: string,
    ) {
        this.startTime = startTimeInput;
        this.endTime = endTimeInput;
        this.description = descriptionInput;
    }

    public abstract printAppointment(): void;
}

class Appointment extends AppointmentABC {
    constructor(
        startTimeInput: Date,
        endTimeInput: Date,
        descriptionInput: string,
    ) {
        super(startTimeInput, endTimeInput, descriptionInput);
    }

    printAppointment(): void {
        console.log('Start time:', this.startTime);
        console.log('End time:', this.endTime);
        console.log('Description:', this.description);
    }
}

const d1 = new Date();
const d2 = new Date('01/01/2023');
const description = 'Description';

// const a1 = AppointmentABC(d1, d2, description);
const a2 = new Appointment(d1, d2, description);
a2.printAppointment();
