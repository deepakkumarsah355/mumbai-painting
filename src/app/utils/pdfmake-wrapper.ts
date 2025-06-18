import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

// Try this:
const vfs = (pdfFonts as any).default?.pdfMake?.vfs;
(pdfMake as any).vfs = vfs;

export default pdfMake;
