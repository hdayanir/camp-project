import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"
import { FormField, Button, Label } from 'semantic-ui-react'
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput'

export default function ProductAdd() {
    const initialValues = { productName: "", unitPrice: 10 }
    const schema = Yup.object({
        productName: Yup.string().required("Urun adi zorunlu"),//metinsel ve zorunlu alan
        unitPrice: Yup.number().required("Urun fiyati zorunlu"),//numara olarak zorunlu alan
    });

    return (
        <div>
            <Formik // formik ile formun baslangic degerlerini ve dogrulama semasini gostermis oluyoruz.
                initialValues={initialValues} validationSchema={schema} onSubmit={(values) => { console.log(values) }}>
                <Form className="ui form">
                    <KodlamaIoTextInput name="productName" placeholder='Ürün Adı'/>
                    <KodlamaIoTextInput name="unitPrice" placeholder='Ürün Fiyatı'/>
                    {/* <FormField>
                        <Field name="productName" placeholder='Ürün Adı' ></Field>
                        <ErrorMessage name="productName" render={error =>
                            <Label pointing basic color="red" content={error}></Label>
                        }></ErrorMessage>
                    </FormField> */}
                    {/* <FormField>
                        <Field name="unitPrice" placeholder='Ürün Fiyatı' ></Field>
                        <ErrorMessage name="unitPrice" render={error =>
                            <Label pointing basic color="red" content={error}></Label>
                        }></ErrorMessage>
                    </FormField> */}
                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
