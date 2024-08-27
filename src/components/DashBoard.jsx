import React from "react";
import AppoinmentDoneIcone from "@/icons/AppoinmentDoneIcone";
import AppoinmentIcon from "@/icons/AppoinmentIcon";
import PatientIcon from "@/icons/PatientIcon";
import TickIcon from "@/icons/TickIcon";
import CheckEyeIcon from "@/icons/CheckEyeIcon";
import PrintIcon from "@/icons/PrintIcon";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
} from "@/components/ui/table";
import CrossIcon from "@/icons/CrossIcon";

const DashBoard = () => {
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = currentDate.toLocaleString("en-US", { month: "short" });
  const year = currentDate.getFullYear();
  const formattedDate = `${day}, ${month} ${year}`;

  const appointments = [
    {
      patientName: "Richard Wilson",
      patientEmail: "email@test.com",
      paidOn: "11 Nov 2023",
      medicine: true,
      type: "Online",
      paidAmount: "$150",
    },
    {
      patientName: "Charlene Reed",
      patientEmail: "email@test.com",
      paidOn: "12 Nov 2023",
      medicine: false,
      type: "In-Person",
      paidAmount: "",
    },
    {
      patientName: "Travis Trimble",
      patientEmail: "email@test.com",
      paidOn: "12 Nov 2023",
      medicine: false,
      type: "In-Person",
      paidAmount: "",
    },
    {
      patientName: "Carl Kelly",
      patientEmail: "email@test.com",
      paidOn: "12 Nov 2023",
      medicine: true,
      type: "",
      paidAmount: "",
    },
    {
      patientName: "Michelle Fairfax",
      patientEmail: "email@test.com",
      paidOn: "12 Nov 2023",
      medicine: false,
      type: "In-Person",
      paidAmount: "",
    },
    {
      patientName: "Gina Moore",
      patientEmail: "email@test.com",
      paidOn: "12 Nov 2023",
      medicine: false,
      type: "In-Person",
      paidAmount: "",
    },
  ];

  return (
    <div className="h-screen w-full px-4 md:px-8">
      <div className="text-2xl font-medium bg-slate-50 h-16 flex items-center">
        Dr, Qamar M
      </div>
      <div className="border border-1 rounded-[6.6px] flex flex-col md:flex-row justify-between items-center w-full p-5 md:p-7 mt-5 gap-5 md:gap-0">
        <div className="flex flex-row items-center gap-5 w-full md:w-80 h-24">
          <div className="p-5 border-[8px] border-pink-600 rounded-full">
            <PatientIcon />
          </div>
          <div className="w-full md:w-80 border border-l-0 border-r-1 border-b-0 border-t-0">
            <p>Total Patient</p>
            <p>1500</p>
            <p>Till Today</p>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center gap-5 w-full md:w-80 h-24">
          <div className="p-5 border-[8px] border-primary-four rounded-full">
            <AppoinmentIcon />
          </div>
          <div className="w-full md:w-80 border border-l-0 border-r-1 border-b-0 border-t-0">
            <p>Today Appoinment</p>
            <p>160</p>
            <p>{formattedDate}</p>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center gap-5 w-full md:w-80 h-24">
          <div className="p-5 border-[8px] border-primary-five rounded-full">
            <AppoinmentDoneIcone />
          </div>
          <div className="w-full md:w-80 border border-l-0 border-r-1 border-b-0 border-t-0">
            <p>Appoinments</p>
            <p>85</p>
            <p>{formattedDate}</p>
          </div>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-lg font-medium">Upcoming Appointments</h1>
      </div>
      <div className="w-full overflow-x-auto h-fit border border-1 rounded-2xl">
        <Table>
          <TableHeader className="font-bold text-base">
            <TableHead>Patient Name</TableHead>
            <TableHead>Paid On</TableHead>
            <TableHead>Medicine</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Paid Amount</TableHead>
            <TableHead>Action</TableHead>
          </TableHeader>
          <TableBody>
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <TableCell className="flex flex-col">
                  <div>{appointment.patientName}</div>
                  <div>{appointment.patientEmail}</div>
                </TableCell>
                <TableCell>{appointment.paidOn}</TableCell>
                <TableCell>
                  {appointment.medicine ? <TickIcon /> : <CrossIcon />}
                </TableCell>
                <TableCell>
                  {appointment.type ? appointment.type : "On Clinic"}
                </TableCell>
                <TableCell>
                  {appointment.paidAmount
                    ? appointment.paidAmount
                    : "Pay Later"}
                </TableCell>
                <TableCell className="flex gap-5">
                  <div className="flex flex-row items-center justify-center gap-2 bg-primary-two w-20 h-8 rounded-[4.3px]">
                    <CheckEyeIcon /> View
                  </div>
                  <div className="flex flex-row items-center justify-center gap-2 bg-primary-six w-20 h-8 rounded-[4.3px]">
                    <PrintIcon /> Print
                  </div>
                </TableCell>
              </tr>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DashBoard;
