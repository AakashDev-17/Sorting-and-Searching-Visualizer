import {Box, Grid} from '@material-ui/core';
import {useState} from 'react';
import ButtonText from './buttons/ButtonText';


export default function AppBar (props: any) {

   const [activeTab, set_activeTab] = useState(0);

   function activeTabIndicator (n: number) {
      set_activeTab(n);
      props.handleChangeTab(n);
   }

   return (
      <Grid
         container
         className="flat-big f-color1"
         style={{
            width: '98vw', position: 'relative',
            margin: 'auto', top: '1rem', overflow: 'hidden',
            borderRadius: '10px'
         }}
      >
         <Grid
            item xs={6} md={2}
         >
            <Box component="h2" p={1} mt={2} ml={1}>
               <a href="#"> AA Visualizer </a>
            </Box>
         </Grid>

         <Grid
            item xs={12} md={8}
         >
            <Box display="flex" justifyContent="center" alignItems="center" mt={1}>
               <ButtonText active={activeTab === 0} handleClick={() => activeTabIndicator(0)} className="app-tabs" label="Sorting" id="sort-v-btn" value="0" />
               <ButtonText active={activeTab === 1} handleClick={() => activeTabIndicator(1)} className="app-tabs" label="Searching" id="search-v-btn" value="1" />
            </Box>

         </Grid>

         <Grid
            item xs={4} md={2}
            className="abs-right"
         >
         </Grid>
      </Grid>
   );
}