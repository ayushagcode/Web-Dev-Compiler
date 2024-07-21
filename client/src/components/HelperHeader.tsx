import { Save, Share2 } from 'lucide-react';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CompilerSliceStateType, updateCurrentLanguage } from '@/redux/slices/compilerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { handleError } from '@/utils/handleError';
import axios from 'axios';

export default function HelperHeader() {
  const dispatch = useDispatch();
  const fullCode = useSelector((state: RootState) => state.compilerSlice.fullCode);
  const currentLanguage = useSelector((state: RootState) => state.compilerSlice.currentLanguage);

  const handleSaveCode = async () => {
    try {
      const response = await axios.post('http://localhost:4000/compiler/save', {
        fullCode: fullCode,
      });
      console.log(response.data);
      // navigate(`/compiler/${response.url}`, { replace: true });
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <div className='__helper_header h-[50px] bg-black text-white p-2 flex justify-between items-center'>
      <div className='__btn_container flex gap-1'>
        <Button onClick={handleSaveCode} variant='success' className='flex justify-center items-center gap-1'>
          <Save size={16} />Save
        </Button>
        <Button variant='secondary' className='flex justify-center items-center gap-1'>
          <Share2 size={16} />Share
        </Button>
      </div>
      <div className='__tab_switcher flex justify-center items-center gap-1'>
        Language:
        <Select
          defaultValue={currentLanguage}
          onValueChange={(value) => dispatch(updateCurrentLanguage(value as CompilerSliceStateType['currentLanguage']))}
        >
          <SelectTrigger className='w-[180px] bg-gray-800 outline-none focus:ring-0'>
            <SelectValue placeholder='Theme' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='html'>HTML</SelectItem>
            <SelectItem value='css'>CSS</SelectItem>
            <SelectItem value='javascript'>JavaScript</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
