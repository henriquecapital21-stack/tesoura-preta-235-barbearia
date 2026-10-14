export const navItems = ['Visão geral','Agenda','Clientes','Profissionais','Serviços','Financeiro','Relatórios','Avaliações','Configurações'];
export const appointments = [
  { client:'Rafael Mendes', initials:'RM', professional:'Lucas Almeida', service:'Corte + Barba', time:'09:00', value:'R$ 85,00', status:'Confirmado', paid:true, tone:'blue' },
  { client:'André Costa', initials:'AC', professional:'Gustavo Reis', service:'Corte clássico', time:'10:30', value:'R$ 55,00', status:'Em atendimento', paid:true, tone:'violet' },
  { client:'Marcos Vinícius', initials:'MV', professional:'Lucas Almeida', service:'Barba premium', time:'13:00', value:'R$ 45,00', status:'Agendado', paid:false, tone:'amber' },
  { client:'João Pedro', initials:'JP', professional:'Thiago Martins', service:'Corte + Sobrancelha', time:'14:30', value:'R$ 70,00', status:'Agendado', paid:true, tone:'green' },
];
export const professionals = [
  {name:'Lucas Almeida', role:'Barbeiro', initials:'LA', appointments:86, rating:'4.9', score:96, color:'blue'},
  {name:'Gustavo Reis', role:'Barbeiro', initials:'GR', appointments:74, rating:'4.8', score:89, color:'purple'},
  {name:'Thiago Martins', role:'Barbeiro', initials:'TM', appointments:61, rating:'4.7', score:81, color:'orange'},
];
export const revenue = [{name:'01', value:720},{name:'05', value:980},{name:'10', value:760},{name:'15', value:1200},{name:'20', value:1080},{name:'25', value:1460},{name:'30', value:1680}];
export const reviews = [{name:'Felipe Nunes', initials:'FN', text:'Atendimento impecável e ambiente muito agradável. Virei cliente fiel!', rating:5, ago:'há 2h'},{name:'Carolina Dias', initials:'CD', text:'O Lucas manda muito bem. Corte sempre no capricho.', rating:5, ago:'há 5h'}];
