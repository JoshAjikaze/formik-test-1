import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

console.log(new Date())

const initialValues = {
    name: '',
    password: '',
    age: "",
}
const onSubmit = (values) => {
    console.log(values);
    setTimeout(
        () => {document.location.reload()}, 1000 * 5
    );
}

const form1Schema = Yup.object({

    name: Yup.string()
        .required('Firstname is Required'),

    password: Yup.string()
        .required('Enter Password')
        .min(8, "Char less than 8")
        .max(12, "Char more than 12")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
});

const form2Schema = Yup.object({

    name: Yup.string()
        .required('Firstname is Required'),

    password: Yup.string()
        .required('Enter Password')
        .min(8, "Char less than 8")
        .max(12, "Char more than 12")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),

    age: Yup.number().required().min(18, "You Must be 18 or Older!")
});

export function Form1() {
    return (
        <div className='px-3 lg:w-1/5 lg:px-0'>

            <Formik
                initialValues={{
                    name: '',
                    password: ''
                }}
                validationSchema={form1Schema}
                onSubmit={onSubmit}
            >
                <Form className='flex flex-col gap-y-3 w-full'>
                <p className='text-center text-xl lg:text-3xl font-bold mb-7 hover:underline'>

                        <span>Test 1</span>
                        <span className='text-base font-normal block'>
                            A user is about to Login to our website with username and password, ensure that the username and password are filled and password is of length 8. Password can be mixed characters.
                        </span>
                    </p>
                    <p>
                        <Field
                            type="text"
                            name="name"
                            id="name"
                            placeholder='Username'
                            className='border-2 border-rose-600 h-12 w-full p-3 focus:outline-none duration-150 focus:border-orange-600 focus:shadow-[0px_0px_74px_13px_rgba(234,88,12,0.75)] hover:shadow-[0px_0px_74px_13px_rgba(234,88,12,0.75)]'
                        />
                        <ErrorMessage name="name" />
                    </p>

                    <p className='flex flex-col justify-between'>
                        <Field
                            type="password"
                            name="password"
                            id="password"
                            placeholder='Password'
                            className='border-2 border-rose-600 h-12 w-full p-3 focus:outline-none duration-150 focus:border-orange-600 focus:shadow-[0px_0px_74px_13px_rgba(234,88,12,0.75)] hover:shadow-[0px_0px_74px_13px_rgba(234,88,12,0.75)]'
                        />
                        <ErrorMessage name="password" />
                    </p>
                    <p>
                        <button type="submit" className='relative w-full text-white font-semibold p-3 duration-500 flex items-center justify-center gap-x-3 bg-orange-600 hover:shadow-[0px_0px_74px_13px_rgba(234,88,12,0.75)]'>
                            <span>Login</span>
                            <span className='text-3xl'>ö</span>
                        </button>
                    </p>

                </Form>
            </Formik>
        </div>
    )
}
export function Form2() {
    return (
        <div className='px-3 lg:w-1/4 lg:px-0 '>

            <Formik
                initialValues={initialValues}
                validationSchema={form2Schema}
                onSubmit={onSubmit}
            >
                <Form className='flex flex-col gap-y-3 w-full'>

                    <p className='text-center text-xl lg:text-3xl font-bold mb-7 hover:underline'>
                        <span>Test 2</span>
                        <span className='text-base font-normal block'>
                            A user is about to access a website that's age restricted and with their username & age. The username and age are required, ensure they are filled. Also check that age is greater than or equals 18.
                        </span>
                    </p>

                    <p>
                        <Field
                            type="text"
                            name="name"
                            id="name"
                            placeholder='Username'
                            className='border-2 border-rose-600 h-12 w-full p-3 focus:outline-none duration-150 focus:border-orange-600 focus:shadow-[0px_0px_74px_13px_rgba(234,88,12,0.75)] hover:shadow-[0px_0px_74px_13px_rgba(234,88,12,0.75)]'
                        />
                        <ErrorMessage name="name" />
                    </p>

                    <p>
                        <p className='flex gap-x-1'>
                            <Field
                                type="number"
                                name="age"
                                id="age"
                                placeholder='Age'
                                className='w-1/4 border-2 border-rose-600 h-12 p-3 text-center focus:outline-none duration-150 focus:border-orange-600 focus:shadow-[0px_0px_74px_13px_rgba(234,88,12,0.75)] hover:shadow-[0px_0px_74px_13px_rgba(234,88,12,0.75)]'
                            />
                            <Field
                                type="password"
                                name="password"
                                id="password"
                                placeholder='Password'
                                className='border-2 border-rose-600 h-12 w-full p-3 focus:outline-none duration-150 focus:border-orange-600 focus:shadow-[0px_0px_74px_13px_rgba(234,88,12,0.75)] hover:shadow-[0px_0px_74px_13px_rgba(234,88,12,0.75)]'
                            />
                        </p>
                        <ErrorMessage name="password" />
                        <ErrorMessage name="age" />
                    </p>

                    <p className='flex flex-col justify-between'>

                    </p>
                    <p>
                        <button type="submit" className='relative w-full text-white font-semibold p-3 duration-500 flex items-center justify-center gap-x-3 bg-orange-600 hover:shadow-[0px_0px_74px_13px_rgba(234,88,12,0.75)]'>
                            <span>Login</span>
                            <span className='text-3xl'>ö</span>
                        </button>
                    </p>

                </Form>
            </Formik>
        </div>
    )
}

