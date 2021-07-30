
import Footer from './Footer';

import Meta from './Meta'
import GlobalStyles from './Layout.styles';
import {Container} from './Layout.styles';
  
export default function Layout({children}) {

	return (
		<>
    <GlobalStyles/>
    
    <Meta/>
  
    
    <Container>
       {children}
       <Footer/>
    </Container>
 
   </>
	);
}
