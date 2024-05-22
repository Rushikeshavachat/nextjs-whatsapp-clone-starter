import React, { useState , useEffect} from 'react';
import Image from 'next/image';
import Input from '@/components/common/Input';// Adjust the import path according to your project structure
import Avatar from '@/components/common/Avatar';// Adjust the import path according to your project structure
import { useStateProvider } from '@/context/StateContext';
import axios from 'axios';
import { ONBOARD_USER_ROUTE } from '@/utils/ApiRoutes';
import { useRouter } from 'next/navigation';

const onboarding = () => {
  const router=useRouter()
  const [{userInfo , newUser} , dispatch]=useStateProvider()
  const [name, setName] = useState(userInfo?.name || "");
  const [about, setAbout] = useState();
  const [image, setImage] = useState("/default_avatar.png");
useEffect(() => {
if (newUser && !userInfo.email) router.push("/login")
  else if(newUser && !userInfo?.email) router.push("/")
}, [newUser , userInfo , router])

  const onboardUserHandler = async () => {
    // Handler logic here
    if (validateDetails()) {
      const email = userInfo?.email;
      try {
        const {data}= await axios.post(ONBOARD_USER_ROUTE ,{email , name , about , image});
        console.log({data});
        if(!data.status){
          dispatch({
            type: reducerCases.SET_NEW_USER,
            newUser:false,
          })
          dispatch({
            type: reducerCases.SET_USER_INFO,
            userInfo:{
              id:data.user.id, name, email , profileImage:image , status:about,
            }
           
          })
          console.log({userInfo});
          router.push("/")
        }
      } catch (err) {
        console.log(err);
      }
    }

  };
const validateDetails=()=>{
  if (name.length < 3) {
    return false;
  }
  return true;
}
  return (
    <div className="bg-panel-header-background h-screen max-w-screen text-white flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-2">
        <Image
          src="/whatsapp.gif"
          alt="whatsapp"
          height={300}
          width={300}
        />
        <span className="text-7xl">Whatsapp</span>
      </div>
      <h2 className="text-4xl">Create Your Profile</h2>
      <div className="flex gap-6 mt-6">
        <div className="flex flex-col items-center justify-center mt-5">
          <Input name="Display Name" state={name} setState={setName} label />
          <Input name="About" state={about} setState={setAbout} label />
          <div className="flex items-center justify-center z-10 overflow-hidden">
            <button
              className="flex items-center justify-center gap-4 bg-search-input-container-background p-2 rounded-lg mt-2"
              onClick={onboardUserHandler}
            >
              Create Profile
            </button>
          </div>
        </div>
        <div>
          <Avatar type="lg" image={image} setImage={setImage} />
        </div>
      </div>
    </div>
  );
};

export default onboarding;

