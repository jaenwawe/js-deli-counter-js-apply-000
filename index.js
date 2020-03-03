<<<<<<< HEAD
var tracker = 0;

=======
>>>>>>> ec41809460ba89637e74cbf80870a673c74b4394
function takeANumber(katzDeli, current){
  var place = katzDeli.length + 1
  katzDeli.push(current)
  return `Welcome, ${current}. You are number ${place} in line.`
<<<<<<< HEAD
}


function internalTracker(katzDeli){
  katzDeli.push(tracker)
  tracker++;
  return `You are ticket number ${tracker}`
=======
>>>>>>> ec41809460ba89637e74cbf80870a673c74b4394
  
}

function nowServing(katzDeli){
  var current
  if (katzDeli === undefined || katzDeli.length === 0) 
    return "There is nobody waiting to be served!"
  else{
    current = katzDeli[0]
    katzDeli.shift()
    return `Currently serving ${current}.`
    
  }
}
  
  function currentLine(katzDeli){
  var current

  var counter = 0
  var empty = "The line is currently empty."
  var place = katzDeli.length
  var sentence = `The line is currently:`
   
  if (katzDeli === undefined || katzDeli.length === 0) 
    return empty
    
  else{
     
      do{
      
      current = katzDeli[0]
      katzDeli.shift()
      if (counter ===0 )  sentence = sentence + ` ${counter+1}. ${current}`
      else sentence = sentence + `, ${counter+1}. ${current}`
      counter++
       }
      while(counter < place)
      return sentence
    }

  }
  


<<<<<<< HEAD
  
=======
  
>>>>>>> ec41809460ba89637e74cbf80870a673c74b4394
