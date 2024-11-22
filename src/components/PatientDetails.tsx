import { toast } from "react-toastify"
import { Patient } from "../types"
import PatiendDetailItem from "./PatiendDetailItem"
import { usePatientStore } from "../store"

type PatientDetailstProps = {
    patient: Patient
}

export default function PatientDetails({ patient }: PatientDetailstProps) {

    const deletePatient = usePatientStore((state) => state.deletePatient)
    const getPatientById = usePatientStore((state) => state.getPatientById)

    const handleClick = () => {
        deletePatient(patient.id)
        toast('Paciente Eliminado', {
            type: 'error'
        })
    }

    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatiendDetailItem label="ID" data={patient.id} />
            <PatiendDetailItem label="Nombre" data={patient.name} />
            <PatiendDetailItem label="Propietario" data={patient.caretaker} />
            <PatiendDetailItem label="Email" data={patient.email} />
            <PatiendDetailItem label="Fecha Alta" data={patient.date.toString()} />
            <PatiendDetailItem label="Síntomas" data={patient.symptoms} />

            <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => getPatientById(patient.id)}
                >Editar</button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => handleClick()}
                >Eliminar</button>
            </div>
        </div>
    )
}
