import {useForm, SubmitHandler} from "react-hook-form";
import "./AddToMenu.scss"

interface IFormInput {
    name: string;
    category: string;
    price: string;
    img: string;
    description: string;
    details: string;
}

// TODO: sumbit form to db && add validation for all fields in the form inputs
export default function App() {
    const {register, handleSubmit} = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

    return (
        <>
            <h1>Add element to menu</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", {required: true, maxLength: 20})} placeholder="name"/>
                <input {...register("img")} placeholder="link to image"/>
                <input {...register("category")} placeholder="here fetch category from db or? simple text?"/>
                <textarea {...register("details")} placeholder="details for menu element page"/>
                <textarea {...register("description")} placeholder="short description"/>
                <input  {...register("price")} placeholder="price"/>
                <button type="submit">Dodaj do menu</button>
            </form>
        </>
    );
}